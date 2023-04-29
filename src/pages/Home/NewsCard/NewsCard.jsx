import moment from 'moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaRegBookmark, FaShareAlt, FaRegStar, FaEye, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';

const NewsCard = ({ news }) => {

    const { _id, title, image_url, details, author, rating, total_view } = news;

    return (
        <Card className="mb-4">
            <Card.Header className='d-flex align-items-center'>
                <Image style={{ height: '40px' }} src={author?.img} roundedCircle />
                <div className='flex-grow-1'>
                    <p className='mb-0'>{author.name}</p>
                    <p><small>{moment(author?.published_date).format('YYYY-MM-D')}</small></p>
                </div>
                <div>
                    <FaRegBookmark /> <FaShareAlt />
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {details.length < 250 ?
                        <>{details}</> :
                        <>{details.slice(0, 250)}... <Link to={`/news/${_id}`}>Read more</Link> </>
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted d-flex align-items-center">
                <div className='align-items-center flex-grow-1'>
                    <Rating
                        placeholderRating={rating.number}
                        readonly
                        emptySymbol={<FaRegStar></FaRegStar>}
                        placeholderSymbol={<FaStar className='text-danger' />}
                        fullSymbol={<FaStar />}
                    >
                    </Rating>
                    <span className='ms-1'>{rating?.number}</span>
                </div>
                <div className='align-items-center'>
                    <FaEye /> {total_view}
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCard;