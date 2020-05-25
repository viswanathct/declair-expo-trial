import mock from './mock';
import res from './res';

const mockHTTP = (baseURL) => mock(baseURL, res);

export default mockHTTP;
