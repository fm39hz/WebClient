export const SetItem = (key: string, value: string): void => {
	if (IsLocalStorageSupport()) {
		localStorage.setItem(key, value);
	}
};
export const GetItem = (key: string): string => {
	const _value = '';
	if (IsLocalStorageSupport()) {
		const _fetchValue = localStorage.getItem(key);
		return _fetchValue !== null ? _fetchValue : _value;
	}
	return _value;
};
const IsLocalStorageSupport = (): boolean => {
	if (typeof Storage === 'undefined') {
		alert('Trình duyệt của bạn không hỗ trợ lưu dữ liệu!');
		return false;
	}
	return true;
};
