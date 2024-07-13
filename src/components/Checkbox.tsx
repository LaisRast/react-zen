import { Checkbox, CheckboxProps } from 'react-aria-components';
import classNames from 'classnames';
import { HiCheck } from 'react-icons/hi';
import Icon from './Icon';
import styles from './Checkbox.module.css';

function _Checkbox({ className, children, ...props }: CheckboxProps) {
  return (
    <Checkbox {...props} className={classNames(styles.checkbox, className)}>
      <div className={styles.box}>
        <Icon className={styles.icon} size={1}>
          <HiCheck />
        </Icon>
      </div>
      {children as any}
    </Checkbox>
  );
}

export { _Checkbox as Checkbox };
export type { CheckboxProps };

export default _Checkbox;
