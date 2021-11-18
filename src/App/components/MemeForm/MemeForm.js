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
          <input type="text" id="f_titre" placeholder="saisir titre" />
          <hr />
        </div>
        <div>
          <h2>Image</h2>
          <select>
            <option value="-1">Aucune</option>
          </select>
          <hr />
        </div>
        <div>
          <h2>text</h2>
          <input type="text" />
          <div className={styles.half}>
            <div>
              <label htmlFor="f_x">x:</label>
              <br />
              <input type="number" className={styles.smallInput} />
            </div>
            <div>
              <label htmlFor="f_y">y:</label>
              <br />
              <input type="number" className={styles.smallInput} />
            </div>
          </div>
        </div>
        <div>
          <p>Decorations</p>
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

}

MemeForm.defaultProps = {

}

export default MemeForm

