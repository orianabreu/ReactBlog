import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { 
    Typography,
    Avatar,
    Grid,
    Container
} from '@material-ui/core';

import useStyles from './styles';

export default function SinglePost() {

    const [postInfo, setPostInfo] = useState({
        title: '',
        body: '',
    });
    const { postId } = useParams();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/' + postId)
          .then(response => response.json())
          .then(json => setPostInfo(json))
      }, [])

    const { postTitle, description, userAvatar } = useStyles();
    const { title, body } = postInfo;

    return (
        <Container maxWidth="md">

            <Typography className={postTitle}>
                {title}
            </Typography>
                <Grid container item xs={12}>
                    <Avatar alt="Remy Sharp" src="/broken-image.jpg" className={userAvatar} />
                    <div>
                        <Typography>User Id</Typography>
                    </div>
                </Grid>
            <Typography className={description}> 
                {body}
            </Typography>
            <Typography>Comments:</Typography>
            
        </Container>
    )
}