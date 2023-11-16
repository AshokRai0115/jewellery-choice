import './Blog.css'

function Blog(){
    const blogs =[
        {
            id:0,
            image: "/images/b1.jpg",
            date: 14,
            month:"July",
            title: "Moly Holy Brings new Indian Bangle",
            content: "alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
        },
        {
            id:1,
            image: "/images/b2.jpg",
            date: 22,
            month: "Jan",
            title: "Moly Holy Brings new Indian Bangle",
            content: "alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
        },
        // {
        //     id:2,
        //     image: "/images/b1.jpg",
        //     date: 14,
        //     month: "July",
        //     title: "Moly Holy Brings new Indian Bangle",
        //     content: "alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
        // },

    ]
    return(
        <div className='blog-container'>
            <h3 className="blog-heading">Latest From Blog</h3>
            <div className='blog-content-container'>
                {
                    blogs.map(blog=>{
                        return <div className='blog-content'>
                        <img src={blog.image} alt={blog.id} />
                       <div className='blog-description'>
                         <p className='blog-date'>{blog.date}<br/>{blog.month}</p>
                        <h6 className='description-title'>{blog.title}</h6>
                        <p className='description-content'>{blog.content}</p>
                        <button className='blog-read-more '>Read More</button>
                       </div>
                    </div>
                    })
                }
                
                
            </div>
        </div>
    )
}

export default Blog;