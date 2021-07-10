function find_max(nums){
  let max_num = Number.NEGATIVE_INFINITY;
  for(let num of nums){
    if(num > max_num){
      max_num =num;
    }
  }
  return max_num
}


    <ul onClick={handleClick}
    className={click ? 'dropdown-menu clicked2': 'dropdown-menu'}
     >
     {DropDownItems[props.data].map((item,index)=>{
       return(
         <li key={index}>
            <a 
            className='dropdown-link'
            href={item.path}
            onClick={()=>setClick(false)}
            >
            {item.title}
            </a>
         </li>
       )
     })}

    </ul>


{props.about && 
  <div className="dropdown-box dropdowncol-1">
  <h2>{FooterData[0].name}</h2>
  <p>{FooterData[0].body}</p>
 </div>
}



    /* <Route path="/services">
              <Services />
            </Route> */


// onMouseEnter={()=> data.dropdown && onMouseEnter(data.name)}
// onMouseLeave={()=> data.dropdown && onMouseLeave(data.name)}



{DropDownItems[props.data].map((item,index)=>{
        
  if(item.items){
   return(
    <div className="dropdown-box dropdowncol-2">
      
      <h2>{item.name}</h2>
      <ul>
      { item.items.map((term,index)=>{
        return(
            <li key={index} >  
              <FontAwesomeIcon className='right-arrow' icon={['fas', 'caret-right']} />
                  <a href="#">{term}</a>
              </li>
        
        )
      })}
    
       </ul>
      </div>
   )}}
  
 )}