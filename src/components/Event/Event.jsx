import PropTypes from 'prop-types';
import { iconSize } from 'constants';
import { Card, EventName, Info, Chip } from './Event.styled';
// import { formatEventStart } from 'utilsHelpers/formatEventStart';
// import { formatEventDuration } from 'utilsHelpers/formatEventDuration';
import { formatEventStart, formatEventDuration } from 'utilsHelpers';
import { FaMapMarkerAlt, FaUserAlt, FaCalendarAlt, FaClock } from "react-icons/fa";

export const Event = ({ name, location, speaker, type, start, end }) => {
    const formatedStart = formatEventStart(start);
    const duration = formatEventDuration(start, end);
    return (
        <Card>
            <EventName>{name}</EventName>
            <Info>
                <FaMapMarkerAlt size={iconSize.sm} />
                {location}
            </Info>
            <Info>
                <FaUserAlt size={iconSize.sm} />
                {speaker}
            </Info>
            <Info>
                <FaCalendarAlt size={iconSize.sm} />
                {formatedStart}
            </Info>
            <Info>
                <FaClock size={iconSize.sm} />
                {duration}
            </Info>
            <Chip eventType={type}>{type}</Chip>
        </Card>
    );
};

// className={`${css.chip} ${css[type]}`}

Event.prototype = {
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    speaker: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    start: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired,
}