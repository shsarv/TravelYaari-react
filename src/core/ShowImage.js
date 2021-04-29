import React, { useState } from 'react';
import { API } from "../config";
import ModalVideo from 'react-modal-video';
import './../../node_modules/react-modal-video/scss/modal-video.scss';
const ShowImage = ({ item, url }) =>{ 
    const [isOpen, setOpen] = useState(false);
    return(
    <div className="product-img">
    <div className="d-flex justify-content-center">
    <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={item.youtubelink}onClose={() => setOpen(false)} />
    {/* <button className="btn-primary">VIEW DEMO</button> */}
        <img
            src={`${API}/${url}/photo/${item._id}`}
            alt={item.name}
            className="mb-3 img-thumbnail w-100 m-1"
            style={{ maxHeight: "100%", maxWidth: "100%" }}
            onClick={()=> setOpen(true)}
        />
    </div>
    </div>
)
};

export default ShowImage;
