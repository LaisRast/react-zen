import { ReactNode } from 'react';
import {
  Header,
  ListBoxSection,
  ListBoxSectionProps,
  Menu as AriaMenu,
  MenuItem as AriaMenuItem,
  MenuSection as AriaMenuSection,
  MenuItemProps,
  MenuProps as AriaMenuProps,
  Separator,
  SeparatorProps,
} from 'react-aria-components';
import classNames from 'classnames';
import { Icon } from '@/components/Icon';
import { Icons } from '@/components/Icons';
import styles from './Menu.module.css';

interface MenuProps extends AriaMenuProps<any> {
  items?: any[];
  className?: string;
  children?: ReactNode;
}

function Menu({ items, className, children, ...props }: MenuProps) {
  return (
    <AriaMenu {...props} className={classNames(styles.menu, className)}>
      {children ||
        items?.map((item, index) => {
          if (item === null) {
            return <Separator key={index} className={styles.separator} />;
          }

          return (
            <MenuItem key={index} id={item}>
              {item}
            </MenuItem>
          );
        })}
    </AriaMenu>
  );
}

function MenuItem({ children, className, ...props }: MenuItemProps<any>) {
  return (
    <AriaMenuItem {...props} className={classNames(styles.item, className)}>
      {children as any}
      <span aria-hidden="true">
        <Icon className={styles.check}>
          <Icons.Check />
        </Icon>
      </span>
    </AriaMenuItem>
  );
}

function MenuSeparator({ className, ...props }: SeparatorProps) {
  return <Separator {...props} className={classNames(styles.separator, className)} />;
}

function MenuSection({
  title,
  className,
  children,
  ...props
}: ListBoxSectionProps<any> & { title?: string }) {
  return (
    <AriaMenuSection {...props} className={classNames(styles.section, className)}>
      {title && <Header className={styles.header}>{title}</Header>}
      {children as any}
    </AriaMenuSection>
  );
}

export { Menu, MenuItem, MenuSeparator, MenuSection };
export type { MenuProps };
