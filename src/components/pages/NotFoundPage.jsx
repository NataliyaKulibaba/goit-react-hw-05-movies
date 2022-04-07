import {Link} from 'react-router-dom'

export default function NotFoundView(){
    return(<h1>404 Page not found. Return to <Link to="/">HomePage</Link></h1>)
}

// export default const NoMatch = () => {
//     return (<p>There's nothing here: 404!</p>);
//   };