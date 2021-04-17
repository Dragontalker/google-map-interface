import { CustomMap } from './CustomMap';
import { User } from './User';

const user = new User();
const customMap = new CustomMap('map', 1, 0, 0);

customMap.addUserMarker(user);



