import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Button from '../Button/Button';
import styles from './MemeForm.module.scss'

const initialState={};
function MemeForm(props) {
  const [state, setstate] = useState(initialState);
  useEffect(() => {
    // didMount + didUpdate
    return () => {
      // will umount
    };
  }, [state]);

  return (
    <div data-testid="MemeForm">
      <form>
        <div>
          <h1>Titre</h1>
          <input type="text" id="f_titre" placeholder="saisir titre" value={props.meme.titre}/>
          <hr />
        </div>
        <div>
          <h2>Image</h2>
          <select value={props.meme.imageId}>
            <option value="-1">Aucune</option>
            {props.images.map((e,i) => <option value={e.id}> { e.titre } </option>) }
          </select>
          <hr />
        </div>
        <div>
          <h2>text</h2>
          <input type="text" value={props.meme.text}/>
          <div className={styles.half}>
            <div>
              <label htmlFor="f_x">x:</label>
              <br />
              <input type="number" className={styles.smallInput} value={props.meme.x} />
            </div>
            <div>
              <label htmlFor="f_y">y:</label>
              <br />
              <input type="number" className={styles.smallInput} value={props.meme.y}/>
            </div>
          </div>
        </div>
        <div>
          <p>Decorations</p>
        </div>

        <label htmlFor="f_color">Couleur</label><input type="color" id="f_color" value={props.meme.color} />
      <div className={styles.half}>
        <div><label htmlFor="f_underline">underline:</label><br /><input id="f_underline" type="checkbox" checked={props.meme.underline} /></div>
        <div><label htmlFor="f_italic">italic:</label><br /><input id="f_italic" type="checkbox" checked={props.meme.italic} /></div>
      </div>


        <div className={styles.half}>
          <Button type="reset" text="Clear" />
          <Button type="submit" text="Submit" />
        </div>
      </form>
    </div>
  );
}

MemeForm.propTypes = {
  meme: PropTypes.object.isRequired,
  images: PropTypes.array.isRequired,
  onMemeChange: PropTypes.func.isRequired,
  
}

MemeForm.defaultProps = {

}

export default MemeForm

