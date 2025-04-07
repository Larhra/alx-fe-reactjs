const UserProfile = (props) => {
    return (
        <div>
            <h2>{props.name}</h2>
            <p>{props.age}</p>
            <p>{props.bio}</p>
        </div>
    );
    
}

UserProfile = ["Age", "Bio"]
export default UserProfile;