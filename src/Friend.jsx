export default function Friend({ friend }) {

    const { name, email } = friends
    return (
        <div className="box">
            <h3>name:{name}</h3>
            <h3>email:{email}</h3>
        </div>
    )

}