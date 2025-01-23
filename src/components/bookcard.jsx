// write the book component code here
function BookCard({image, name, genre, author}){
    return(
        <div>
            <img src={image} alt={name} />
            <br/>
            <b>{name}</b>
            <br/>
            <b>Genre:{genre}</b>
            <br/>
            <b>Author:{author}</b>
            <br/>
            <br/>
        </div>
    )
}
export default BookCard;
