import {motion} from 'framer-motion';
import {NavLink} from 'react-router-dom'; 

export default function Header(){
  return (
    <div className="header">
      <motion.nav transition={{delay: 0.3}} initial={{y: "-200%"}} animate={{y: 0}}>
        <ul>
          <li><NavLink activeClassName="active" to="/" exact>Home</NavLink></li>
          <li><NavLink activeClassName="active" to="/points">Points</NavLink></li>
          <li><NavLink activeClassName="active" to="/history">History</NavLink></li>
        </ul>
      </motion.nav>
    </div>
  );
}
