import { Company } from './Company';
import { CustomMap } from './CustomMap';
import { User } from './User';

const user = new User();
const company = new Company();
const customMap = new CustomMap('map', 1, 0, 0);

customMap.addUserMarker(user);
customMap.addCompanyMarker(company);



