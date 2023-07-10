import React, { useEffect, useState } from 'react'
import { AiOutlineMessage, AiOutlineWarning } from 'react-icons/ai'
import { BsFillBookmarkFill } from 'react-icons/bs'
import getStudentByAccountId from '../../redux/actions/Student/GetStudentByAccountId'
import { useDispatch, useSelector } from 'react-redux'
import getTeacherByAccountId from '../../redux/actions/Teacher/GetTeacherByAccountId'
import createAxiosJWT from '../../utils/createInstance'
import { getAccountByIdSuccess } from '../../redux/slices/Account/getAccountByIdSlice'
import changeSeenMessage from '../../redux/actions/Account/changeSeenMessage'
import { getStudentByAccountIdSuccess } from '../../redux/slices/Student/getStudentByAccountIdSlice'
import deleteSeenMessage from '../../redux/actions/Account/DeleteSeenMessage'

function SystemNotification({ setShow, show, teacherId, flag, user }) {
  const dispatch = useDispatch()

  const currentUser = useSelector((state) => state.login.login?.currentUser)
  const [seen, setSeen] = useState(user.account_id ? new Array(user.account_id.messageFromSystem.length).fill(false) : [])
  const [seen2, setSeen2] = useState(user.account_id ? new Array(user.account_id.seenMessage.length).fill(true) : [])


  const axiosJWT = createAxiosJWT(dispatch, currentUser, getStudentByAccountIdSuccess)
  const handleSeen = (item, index) => {

    let mark = seen.map((i, position) => index === position ? !i : i).filter(i => i == false)
    setSeen([...mark])
    console.log("mark seen ", { mark })
    const value = {
      seen: true,
      seenMessage: item
    }
    // value, dispatch, account_id, axiosJWT,accessToken
    changeSeenMessage(value, dispatch, currentUser?._id, axiosJWT, currentUser?.accessToken, flag)
    // console.log(value)
    const newSeen = [...seen2, true]
    console.log("new seen ", { newSeen })
    setSeen2([...newSeen])

  }

  const handleUnseen = (item, index) => {

    let mark = seen2.map((i, position) => index === position ? !i : i).filter(i => i == true)
    setSeen2([...mark])
    const value = {
      seen: false,
      seenMessage: item
    }
    // value, dispatch, account_id, axiosJWT,accessToken
    changeSeenMessage(value, dispatch, currentUser?._id, axiosJWT, currentUser?.accessToken, flag)
    const newUnseen = [...seen, false]
    console.log("mark unseen", { newUnseen })
    setSeen([...newUnseen])
    // 
  }

  const handleDelete = (item) => {
    console.log({ item })
    deleteSeenMessage(item, dispatch, currentUser?._id, axiosJWT, currentUser?.accessToken, flag)
  }
  console.log("user", user, user.account_id)
  // console.log("cat", user.account_id.messageFromSystem[0].slice(user.account_id.messageFromSystem[0].indexOf('https://')).trim().split(',').filter(i => i != ''))
  if (user) {
    return (
      <div style={{ display: `${show == 3 ? 'block' : 'none'}`, textAlign: 'left', marginTop: '1rem' }}>
        <strong className='is-size-6 mt-3 mb-6'>Thông báo chưa đọc</strong>
        {user && user.account_id.messageFromSystem.length > 0 ?
          
          user.account_id.messageFromSystem
          // .slice().reverse()
            .map((item) =>
              <div className='card mb-4 mt-4' style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                padding: '1rem 2rem',
                cursor: 'pointer',
                flexDirection: 'row',
              }}>
                <div className='column is-11'
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    flexDirection: 'column',
                    textAlign: 'left',
                    // marginRight: '5rem',

                  }}>
                  <div style={{ display: 'flex', alignItems: 'flex-end', marginBottom: '1rem' }}>
                    <AiOutlineMessage fill={"#3498db"} style={{ width: '2rem', height: '2rem', }} />
                    <strong style={{width:"11rem"}} className='is-size-5 mt-2 ml-2 has-text-info is-dark'>Thông báo </strong>
                    <p  style={{ width: "100%", wordWrap: 'break-word', marginBottom: '.1rem' }}>
                        {item.split(')')[0].split('(')[1]}
                      </p>
                  </div>
                  {item.includes('https://') ?
                     <>
                     <p style={{ width: "100%", wordWrap: 'break-word' }}>
                       {item.split(')')[1].split(":")[0]}:
                     </p>
                     <p style={{ width: "100%", wordWrap: 'break-word' }}>

                       {item.slice(item.indexOf('https://')).trim().split(',')
                         .filter(i => i != '')
                         .map(i => <>
                           <li>{i.trim()}</li>
                         </>)}


                     </p>
                   </>

                    :
                    <p>{item}  </p>
                  }

                </div>
                <div className='column is-1'>
                  <BsFillBookmarkFill
                    onClick={() => handleSeen(item, user.account_id.messageFromSystem.indexOf(item), setSeen, seen)}
                    style={{
                      fill: `${seen[user.account_id.messageFromSystem.indexOf(item)] ? '#3498db' : '#000'}`,
                      // color: `${seen ? '#3498db' : '#000'}`,
                    }}
                  />
                </div>
              </div>
            )
            :
            <div style={{ textAlign: 'center'}}><p>Không có thông báo nào.</p></div>
        }
        <hr />

        <strong className='is-size-6 mt-3 mb-6'>Thông báo đã đọc</strong>
        {user && user.account_id.seenMessage.length > 0 ?
         user.account_id.seenMessage
          .map((item) =>
            <div className='card mb-4 mt-4'
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                padding: '1rem 2rem',
                cursor: 'pointer',
                flexDirection: 'column',
              }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                cursor: 'pointer',
                flexDirection: 'row',
                width: '100%',
              }}>
                <div className='column is-11'
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    flexDirection: 'column',
                    textAlign: 'left',

                  }}>
                  <div style={{ display: 'flex', alignItems: 'flex-end', marginBottom: '1rem' }}>
                    <AiOutlineMessage fill={"#3498db"} style={{ width: '2rem', height: '2rem', }} />
                    <strong style={{width:"11rem"}} className='is-size-5 mt-2 ml-2 has-text-info is-dark'>Thông báo </strong>
                    <p style={{ width: "100%", wordWrap: 'break-word', marginBottom: '.1rem' }}>
                        {item.split(')')[0].split('(')[1]}
                      </p>
                  </div>
                  {item.includes('https://') ?
                    <>
                      <p style={{ width: "100%", wordWrap: 'break-word' }}>
                        {item.split(')')[1].split(":")[0]}:
                      </p>
                      <p style={{ width: "100%", wordWrap: 'break-word' }}>

                        {item.slice(item.indexOf('https://')).trim().split(',')
                          .filter(i => i != '')
                          .map(i => <>
                            <li>{i.trim()}</li>
                          </>)}


                      </p>
                    </>

                    :
                    <p>{item}  </p>
                  }
                </div>
                <div className='column is-1'
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <BsFillBookmarkFill
                      onClick={() => handleUnseen(item, user.account_id.seenMessage.indexOf(item))}
                      style={{
                        fill: `${seen2[user.account_id.seenMessage.indexOf(item)] ? '#3498db' : '#000'}`,
                      }}
                    />
                  </div>



                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
                <button className='button is-danger is-light'
                  type='button'
                  onClick={() => handleDelete(item)}
                >Xóa</button>
              </div>
            </div>
          ):
          <div style={{ textAlign: 'center'}}><p>Không có thông báo nào.</p></div>

        }

      </div>
    )
  }

}

export default SystemNotification