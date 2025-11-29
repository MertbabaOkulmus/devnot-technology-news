"use client"

const BlogForm = () => {

   return (
      <div className="comment-respond">
         <h3 className="comment-reply-title">Post a comment</h3>
         <form onSubmit={(e) => e.preventDefault()} className="comment-form">
            <p className="comment-notes">Your email address will not be published. Required fields are marked *</p>
            <div className="form-grp">
               <textarea placeholder="Comment"></textarea>
            </div>
            <div className="row">
               <div className="col-md-4">
                  <div className="form-grp">
                     <input type="text" placeholder="Name" />
                  </div>
               </div>
               <div className="col-md-4">
                  <div className="form-grp">
                     <input type="email" placeholder="Email" />
                  </div>
               </div>
               <div className="col-md-4">
                  <div className="form-grp">
                     <input type="url" placeholder="Website" />
                  </div>
               </div>
            </div>
            <div className="form-grp checkbox-grp">
               <input type="checkbox" id="checkbox_two" />
               <label htmlFor="checkbox_two">Save my name, email, and website in this browser for the next time I comment.</label>
            </div>
            <button type="submit" className="btn btn-two">Post Comment</button>
         </form>
      </div>
   )
}

export default BlogForm
