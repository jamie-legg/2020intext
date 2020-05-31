import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
  IonRouterLink,
} from '@ionic/react';

import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { archiveOutline, archiveSharp, bookmarkOutline, heartOutline, heartSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Learning',
    url: '/page/Learning',
    iosIcon: mailOutline,
    mdIcon: mailSharp
  },
  {
    title: 'Intent',
    url: '/page/Intent',
    iosIcon: paperPlaneOutline,
    mdIcon: paperPlaneSharp
  },
  {
    title: 'Decisions',
    url: '/page/Decisions',
    iosIcon: heartOutline,
    mdIcon: heartSharp
  },
  {
    title: 'Community',
    url: '/page/Community',
    iosIcon: archiveOutline,
    mdIcon: archiveSharp
  },
  {
    title: 'Information',
    url: '/page/Information',
    iosIcon: trashOutline,
    mdIcon: trashSharp
  },
  {
    title: 'Chemicals',
    url: '/page/Chemicals',
    iosIcon: warningOutline,
    mdIcon: warningSharp
  }
];


const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>2020 in Text</IonListHeader>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" icon={appPage.iosIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

      </IonContent>
    </IonMenu>
  );
};

export default Menu;
