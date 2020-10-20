import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import styles from './ProfileInfo.module.css';
import userPhoto from '../../../assets/images/user.png';
import { ProfileStatus } from './ProfileStatus';
import { ProfileStatusWithHooks } from './ProfileStatusWithHooks';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      {/* <div>
        <img src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350" />
      </div> */}
      <div className={styles.descriptionBlock}>
        <div className="userPhoto">
          <img
            height="300"
            src={
              props.profile.photos.large
                ? props.profile.photos.large
                : userPhoto
            }
          />
        </div>
        <ProfileStatusWithHooks
          status={props.status}
          updateStatus={props.updateStatus}
        />
        {/* && */}
        {props.profile.aboutMe != null && (
          <div style={{ marginTop: '20px' }}>
            Обо мне: {props.profile.aboutMe}
          </div>
        )}
        <div>
          {Object.keys(props.profile.contacts)
            .filter((c) => {
              return props.profile.contacts[c] != null;
            })
            .map((key) => (
              <div key={key}>
                {key}: {props.profile.contacts[key]}
              </div>
            ))}
          <br />
        </div>
        <div>
          Looking for a job: {props.profile.lookingForAJob ? 'Yes' : 'No'}
        </div>
        {props.profile.lookingForAJobDescription != null && (
          <div>
            Looking for a job description:{' '}
            {props.profile.lookingForAJobDescription}
          </div>
        )}
        <div>FullName: {props.profile.fullName}</div>
        <br />
      </div>
    </div>
  );
};

export default ProfileInfo;
