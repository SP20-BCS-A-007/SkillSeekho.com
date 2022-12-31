import React from 'react'
import FirstSection from './FirstSection';

const NotFound = () => {
    return ( 
        <>
        <FirstSection
        title={"404 Page"}
        description={
          "Oops! This obviously isn't a page you were looking for.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi illum vero neque numquam quas! Porro cum nobis, rem fugiat sapiente non ducimus dolor, quisquam consectetur dicta tenetur totam accusamus fuga."
        }
        btntitle={"Go to the Home Page"}
        link={"/"}
      />
      <h1>Under Deverlopment</h1>
      <h1>Under Deverlopment</h1>
        </>
     );
}
 
export default NotFound;