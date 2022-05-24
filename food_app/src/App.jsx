import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import axios from 'axios'
import RestaurantDetails from './Components/RestaurantDetails';

function App() {
  const [data,setData]=useState([]);
  const [loading,setLoading]=useState(true);
  const [error,setError]=useState(false);
  const [page,setPage]=useState(1);
  const [ratingOrder,setRatingOrder]=useState("asc");
  const [costOrder,setCostOrder]=useState("asc");
  const [filterRating,setFilterRating]=useState(0)
useEffect(()=>{
 fetchData({page,ratingOrder,costOrder,filterRating})
},[page,ratingOrder,costOrder,filterRating])
console.log(data);



const fetchData=async({page,ratingOrder,costOrder,filterRating})=>{
  setLoading(true)
  axios({
    method:"get",
    url:"http://localhost:4000/food",
    params:{
      _page:page,
      _limit:5,
      _sort:"rating,cost",
      _order:`${ratingOrder},${costOrder}`,
      rating_gte:filterRating
    }
  }).then(res=>{
    setData(res.data);
    setLoading(false)
  }).catch(err=>{
    setError(true);
    setLoading(false)
  }) 
}

  return (
    <div className="App">
    <h1>Restaurant details</h1>
    <div>
    <button disabled={ratingOrder=="desc"} onClick={()=>setRatingOrder("desc")}> RatingSort By descending</button>
    <button disabled={ratingOrder=="asc"} onClick={()=>setRatingOrder("asc")}>RatingSort By ascending</button>
    </div>
    <div>
    <button disabled={costOrder=="desc"} onClick={()=>setCostOrder("desc")}> Cost Sort By descending</button>
    <button disabled={costOrder=="asc"} onClick={()=>setCostOrder("asc")}> Cost Sort By ascending</button>
    </div>
    <div>
      <button onClick={()=>setFilterRating}>Rating greater than 4</button>
      <button onClick={()=>setFilterRating}>Rating greater than 3</button>
      <button onClick={()=>setFilterRating}>Rating greater than 2</button>
      <button onClick={()=>setFilterRating}>Rating greater than 1</button>
    </div>
    <div>
      <button disabled={page==1} onClick={()=>setPage(page-1)}>Prev</button>
      <button disabled={page==5}onClick={()=>setPage(page+1)}>Next</button>
      <PaginationComponent currentPage={page} lastPage={5} onPageChange={setPage} />
    </div>
    <div>
      {
        data.map(item=>{
          return(
          <RestaurantDetails key={item.id} {...item}/>
          )
        })
      }
    </div>
    </div>
  )
}

//given current page
//given last page
//create a pagination components

const PaginationComponent = ({
  currentPage,
  lastPage,
  onPageChange
}) => {
  const arr = new Array(lastPage).fill(0);
  return (
    <div>
      {
        arr.map( (item, page)=> <button onClick={()=>onPageChange(page+1)} disabled={(page+1)===currentPage}> {page+1} </button> )
      }
    </div>
  )
}

export default App
