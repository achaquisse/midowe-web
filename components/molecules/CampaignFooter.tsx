import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet } from '@fortawesome/free-solid-svg-icons';
import { faCalendar, faHeart } from '@fortawesome/free-regular-svg-icons';

const CampaignFooter = () => {
  return (
    <div className="mt-2 text-xs font-medium text-indigo-500 flex items-center">
      <FontAwesomeIcon icon={faWallet} />
      <span className="pr-3 pl-1">10%</span>

      <FontAwesomeIcon icon={faCalendar} />
      <span className="pr-3 pl-1">12.Dez</span>

      <FontAwesomeIcon icon={faHeart} />
      <span className="pl-1">12 doações</span>
    </div>
  );
};

export default CampaignFooter;
