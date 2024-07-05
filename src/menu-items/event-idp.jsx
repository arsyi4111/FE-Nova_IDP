// assets
// import PersonSearchRoundedIcon from '@mui/icons-material/PersonSearchRounded';
// import EventNoteRounded from '@mui/icons-material/EventNoteRounded';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import GroupsIcon from '@mui/icons-material/Groups';
import EventNoteRoundedIcon from '@mui/icons-material/EventNoteRounded';
import AccessibilityRoundedIcon from '@mui/icons-material/AccessibilityRounded';
// ==============================|| DASHBOARD MENU TATENT IDENTIFICATION ||============================== //

const EventIDP = {

  id: 'individual-development-plan',
  // title: 'Manajemen Pengguna',
  // caption: 'Pages Caption',
  type: 'group',
  children: [
    {
      id: 'individual-development-plan',
      title: 'Individual Development Plan',
      type: 'collapse',
      icon: AccessibilityRoundedIcon,

      children: [
        {
          id: 'event',
          title: 'Event',
          type: 'item',
          icon: EventNoteRoundedIcon,
          url: '/individual-development-plan/event',
          target: false
        },
      ]
    }
  ]
};

export default EventIDP;