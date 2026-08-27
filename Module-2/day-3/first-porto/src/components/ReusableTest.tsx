interface UserIdentityProp {
    id: number
    name: string
    age: number
}

export default function ReusableText({ id, name, age }: UserIdentityProp) {
    return (
        <div style={{
            border: "1px solid #ddd",
            borderRadius: 5,
            padding: 5,
            display: "flex",
            alignItems: "center",
            gap: 5,
            marginTop: 10
        }}>

            <h2>{name}</h2>
            <p>{age}</p>
            <small>#{id}</small>
        </div>
    )
}