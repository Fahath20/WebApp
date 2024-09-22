export default function Gallery() {
    return (
        <section>
            <h1>Amazing scientists</h1>
            <Profile 
                person={person}
                size={100}
            />
            <Profile
                person={person}
                size={200}
            />
        </section>
    )
}

function Profile(props) {
    return (

 <div className="card">
      <Avatar {...props}/>
</div>
       
    )
}

function Avatar({ person, size }) {
    return (
      <img
        className="avatar"
        src="https://i.imgur.com/1bX5QH6.jpg"
        alt={person.name}
        width={size}
        height={size}
      />
    );
  }

const person = {
    name: 'Gregorio Y. Zara'
};