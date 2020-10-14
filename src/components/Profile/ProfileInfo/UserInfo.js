import React from 'react'

export function UserInfo(props) {
    return (
        <>
        {props.profile.aboutMe !=null &&
        <div style={{marginTop: '20px'}}>
            Обо мне: {props.profile.aboutMe}
        </div>}
        <div>
            {Object.keys(props.profile.contacts).filter((c)=> {return props.profile.contacts[c] != null}).map(key => 
            <div key={key}>
                {key}: {props.profile.contacts[key]}
            </div>)}
            <br/>
        </div>
        <div>
            Looking for a job: {(props.profile.lookingForAJob)? 'Yes' : 'No'}
        </div>
        {props.profile.lookingForAJobDescription != null && 
        <div>
            Looking for a job description: {props.profile.lookingForAJobDescription}
        </div>}
        <div>
            FullName: {props.profile.fullName}
        </div>
        <br/>  
        </>
    )
};
