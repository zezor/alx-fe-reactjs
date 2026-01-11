// function UserProfile ({ name, age, bio }) {
//     return (
//         <div>
//             <h2>{name}</h2>
//             <p>Age: {age}</p>
//             <p>Bio: {bio}</p>
//         </div>
//     );
// }
// export default UserProfile;

function UserProfile ({ props }) {
    return (
        <div>
            <h2>{props.name}</h2>
            <p>Age: {props.age}</p>
            <p>Bio: {props.bio}</p>
        </div>
    );
}
export default UserProfile;