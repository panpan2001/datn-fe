import React, { Suspense, useEffect, useMemo, useRef, useState } from "react";
import {
  MeetingProvider,
  MeetingConsumer,
  useMeeting,
  useParticipant,
} from "@videosdk.live/react-sdk";
import {  createMeeting, getMeetingRoomByLink } from "./API";
// import getMeetingAndToken from "./API";
import ReactPlayer from "react-player";
import JoinScreen from "./JoinScreen";
import MeetingView from "./MeetingView";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import JoinScreen2 from "./JoinScreen copy";
import createAxiosJWT from "../../utils/createInstance";
import { getCourseByIdSuccess } from "../../redux/slices/Course/getCourseById";
import addLinkMeeting from "../../redux/actions/Course/AddLinkMeeting";
import { authToken } from "../../data";
import { getDemoCourseByIdSuccess } from "../../redux/slices/DemoCourse/getDemoCourseById";
import addLinkMeetingDemoCourse from "../../redux/actions/DemoCourse/addLinkMeetingDemoCourse";



function VideoMeeting2() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { idJoinClass } = useParams();
  const [meetingId, setMeetingId] = useState("");
  const [links, setLinks] = useState(null);
  const user = useSelector((state) => state.login.login?.currentUser)
  const account_id = user?._id
  const accessToken = user?.accessToken
  const axiosJWTLinkMeetingCourse = createAxiosJWT(dispatch, user, getCourseByIdSuccess)
  const axiosJWTLinkMeetingDemCourse = createAxiosJWT(dispatch, user, getDemoCourseByIdSuccess)
  const { idClass } = useParams();
  const [searchParams]= useSearchParams()
  const isDemo=searchParams.get('isDemo')
  console.log({isDemo})
  const getMeetingAndToken = async (value, flag) => {
    const { roomId, links } = await createMeeting({ token: authToken });
    setMeetingId(roomId);
    setLinks(links);

  };
  const handleSaveLink = (flag, meetingId) => {
    console.log({ flag, meetingId });
    if (flag == "true") {
      // democourse
      addLinkMeetingDemoCourse(meetingId.split(), [], account_id, idClass, dispatch, axiosJWTLinkMeetingDemCourse, accessToken)
      navigate(`/profile/${account_id}/teacherClass`)
    }
    else {
      // course
      addLinkMeeting(meetingId.split(), [], account_id, idClass, dispatch, axiosJWTLinkMeetingCourse, accessToken)
      navigate(`/profile/${account_id}/teacherClass`)
    }

  }
  return authToken &&

    (<Suspense>
      <div style={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
      }}>
        {meetingId &&
          <strong>Mã phòng học: {meetingId}</strong>
        }
        {
          user && user.role_name == 'teacher' &&
          <>
            {meetingId == "" ?
              <button
                className="button is-success"
                type="button"
                onClick={() => { getMeetingAndToken(meetingId, 0) }}>Lấy mã phòng học</button> :
                <div style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "1rem",
                  justifyContent: "center",
                  alignItems: "center",
                }}>
              <button
                className="button is-info"
                type="button"
                onClick={() => { handleSaveLink(isDemo, meetingId) }}>Lưu</button>
                <button
                className="button is-danger"
                type="button"
                onClick={() => { navigate(-1) }}>Hủy</button>
                </div>
            }


          </>

        }
      </div>

    </Suspense>
    )

}

export default VideoMeeting2

// https://docs.videosdk.live/react/guide/video-and-audio-calling-api-sdk/setup-call/initialise-meeting#
// https://docs.videosdk.live/react/guide/video-and-audio-calling-api-sdk/control-remote-participant/remote-participant-media
// https://docs.videosdk.live/api-reference/realtime-communication/validate-room
// https://app.videosdk.live/api-keys?orgId=1N2JNGSAO6N4