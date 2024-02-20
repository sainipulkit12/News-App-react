import React from 'react'

const NewsItem = (props) => {

    let { title, description, imageUrl, newsUrl, author, date } = props;
    return (
        <div className='my-3'>
            <div className="card" style={{ width: "18rem" }}>
                <img src={!imageUrl ? "https://www.livemint.com/lm-img/img/2023/08/19/600x338/PTI07-27-2023-000045B-0_1692458299564_1692458318095.jpg" : imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}..</h5>
                    <p className="card-text">{description}..</p>
                    <p class="card-text"><small class="text-body-secondary">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                    <a rel='noreferrer' href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
                </div>
            </div></div>
    )

}

export default NewsItem