import React, {Component} from 'react';
import './BlogCreate.css';
export default class BlogCreate extends Component{

render() {
  return (
    <div className="blogCreation_Content">
      <h2>Hello there !</h2>
      <p>Here you can create a NEW blog post</p>
      <form>
        <div>
          <label>Title: </label><input type='text' name='title' placeholder='New blog post' id='blogTitle'></input>
        </div>
        <div>
          <label>Author: </label><input type='text' name='author' id='blogAuthor'></input>    
        </div>
        <div>
          <label>Short decribsion: </label><textarea  name='shortDecribsion' id='SD'></textarea> 
        </div>
        <div>
          <label>Main content: </label>
          <textarea name='mainConten' id='MC'></textarea> 
        </div>
        <input type="submit" value="Submit" id='submit'></input>
      </form>
    </div>
  );
}

}
