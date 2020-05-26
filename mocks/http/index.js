import mock from './mock';
import res from './res';

const mockHTTP = (baseURL) => mock(
	baseURL, res, { delay: 100 }
);

export default mockHTTP;
