import React, { useEffect, useState, useRef } from 'react'
import './Iscroll.css';
import { fetchImages } from './api/api'
//import {debounce} from './helpers/helpers'

const Iscroll = () => {


  const [imageList, setImageList] = useState([]);
  const [page, setPage] = useState(2);
  const loader = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0
    };
    const observer = new IntersectionObserver(intersectionCallback, options);
    if (loader.current) {
      observer.observe(loader.current)
    }
    const fetchData = async (page) => {
      const data = await fetchImages(page)
      setImageList([...imageList, ...data])
    }
    fetchData(page)

    // eslint-disable-next-line  
  }, []);


  useEffect(() => {

    const fetchData = async (page) => {
      const data = await fetchImages(page)
      setImageList([...imageList, ...data])
    }
    fetchData(page)

    // eslint-disable-next-line   
  }, [page])

  const intersectionCallback = (entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setPage((page) => page + 1)
    }
  }

  return (<div className="Iscroll" >
    <h1>Infinite Scroller by Alex Bonillas</h1>
    <h2>Scroll Down for more data</h2>
    <div>
      {
        imageList.map((img, i) => {
          return (<div key={i}
            className="Iscroll-List"
          >
            <img src={img.download_url} height="300" width="300" alt={img.url}></img>
            <h3>Author: {img.author}</h3>
          </div>)
        })
      }

      <div className="loading" ref={loader}>
        <h2>Load More</h2>
      </div>
    </div>
  </div>)
}

export default Iscroll;
