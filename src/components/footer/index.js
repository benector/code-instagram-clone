import styles from './styles.module.css';

function Footer(props) {
  let width = "100%";
  let display = "unset";
  if(props.width)
  {
    width = props.width;
  }
  if(props.display)
  {
    display = props.display;
  }
  return (
    <footer style={{width:width, display:display}}className={styles.footer}>
      <div className={styles.container}>
        <a
          href='https://appmasters.io/'
          target='_blank'
          rel='noreferrer'
        >
          App Masters
        </a>
        <a
          href='https://codejr.com.br/'
          target='_blank'
          rel='noreferrer'
        >
          Code Júnior
        </a>
        <a href='https://www.linkedin.com/in/beatrizbenedicto/'
          target='_blank'
          rel='noreferrer'
        >
          Beatriz Benedicto
        </a>
      </div>
    </footer>
  );
}

export default Footer;