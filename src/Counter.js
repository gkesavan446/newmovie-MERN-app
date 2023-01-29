import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';


function Counter() {
  
  let [like, setLike] = useState(0);
  let [dislike, setDislike] = useState(0);

 

  return (
    <div>
      {/* {like - dislike >= 10 ? <h3>you are awesome 😍😍</h3> : null} */}
      <IconButton aria-label="like" onClick={() => {setLike(like + 1)}} color="primary">
      <Badge badgeContent={like} color="primary">
      👍
    </Badge>
      
      </IconButton>
      <IconButton aria-label="dislike" onClick={() => {setDislike(dislike + 1)}} color="error">
      <Badge badgeContent={dislike} color="error">
      👎
    </Badge>
     
      </IconButton>     

    </div>
  );
}

export {Counter};