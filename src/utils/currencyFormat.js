const currency = new Intl.NumberFormat("id-ID", {
   currency: "IDR",
   style: "currency",
   minimumFractionDigits: 0,
});

export default currency;
