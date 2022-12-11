import PropTypes from 'prop-types';

import { ListItem, Status, Avatar, Name } from './FriendList.styled';

export const FriendListItem = ({avatar, name, isOnline }) => {
    return (
       <ListItem>
            <Status bg={isOnline}>{isOnline}</Status>
        <Avatar src={avatar} alt="User avatar" width="48" />
            <Name>{name}</Name>
        </ListItem> 
    )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};