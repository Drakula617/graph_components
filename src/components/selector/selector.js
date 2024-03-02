
import styles from './selector.module.css';
const Selector = (props) =>
{
  return (
        <div className={styles.selector}
          style={{
            left: props.position.left,
            top: props.position.top,
            width: props.position.width,
            height: props.position.height
          }}
        />
      )
  
}
export default Selector;