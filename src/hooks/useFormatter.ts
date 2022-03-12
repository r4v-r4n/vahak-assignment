const useFormatter = () => {
	// function that takes in price in number and add commas to it
	const formatPrice = (price: string) => {
		return price !== ''
			? parseInt(price.toString()).toLocaleString('en-IN', {
					style: 'currency',
					currency: 'INR',
			  })
			: '';
	};

	return { formatPrice };
};

export default useFormatter;
