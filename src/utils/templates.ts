const data = (() => {
  const invoice = {
    date: "07/11/2025",
    no: "0051",
    due: "07/12/2025",
    items: [
      {
        name: "Mobile App Modernisation (03-09 Nov 2025)",
        quantity: 5,
        price: 395,
        total: 0,
      },
      {
        name: "Mobile App Modernisation (27 Oct-02 Nov 2025)",
        quantity: 5,
        price: 395,
        total: 0,
      },
    ],
    total: 0,
    payment: {
      accountName: "MB Kast Productions",
      bankName: "Paysera LT, UAB",
      iban: "LT503500010014583277",
      swiftCode: "EVIULT2VXXX",
    },
  };

  invoice.items = invoice.items.map((item) => {
    return {
      ...item,
      total: item.price * item.quantity,
    };
  });

  invoice.total = invoice.items.reduce((total, item) => total + item.total, 0);

  const company = {
    name: "MB Kast Productions",
    address: "Mokyklos street 13",
    city: "Verstaminai 67412, Lithuania",
    registrationCode: "305830693",
  };

  const client = {
    name: "Bound",
    address: "Level 2, 65 Dover Street",
    city: "Cremorne VIC 3121",
  };
  return { invoice, company, client };
})();

export const dynamicInvoiceTemplate = () => {
  return `
  <div class="p-12 pl-32">
    <div class="flex justify-between">
      <div>
        <p class="pb-2 text-4xl">${data.company.name}</p>
        <p class="text-sm text-gray-400">${data.company.address}, ${
    data.company.city
  }, ${data.company.registrationCode}</p>
      </div>
    </div>
    <div class="flex justify-between pt-16">
      <div>
        <p>${data.invoice.date}</p>
        <p class="pb-3 text-4xl font-bold">INVOICE</p>
        <p class="text-sm font-bold">INVOICE NO. <span class="pl-1 font-normal">${
          data.invoice.no
        }</span></p>
        <p class="text-sm font-bold">DUE DATE: <span class="pl-1 font-normal">${
          data.invoice.due
        }</span></p>
      </div>
      <div class="pl-2 text-right">
        <p class="text-gray-400">CLIENT</p>
        <p class="font-bold">${data.client.name}</p>
        <p class="text-sm">${data.client.address}</p>
        <p class="text-sm">${data.client.city}</p>
      </div>
    </div>
    <div class="pt-16">
      <table class="w-full table-auto text-sm">
        <thead class="border-b-2">
          <tr class="h-10 text-left">
            <th>ITEM</th>
            <th>QUANTITY (days)</th>
            <th>PRICE</th>
            <th class="text-right">TOTAL</th>
          </tr>
        </thead>
        <tbody>
          ${data.invoice.items
            .map((item) => {
              return `
            <tr class="h-8">
              <td>${item.name}</td>
              <td>${item.quantity}</td>
              <td>${formatAmount(item.price)}</td>
              <td class="text-right">${formatAmount(item.total)}</td>
            </tr>`;
            })
            .join("")}
        </tbody>
      </table>
    </div>
    <div class="flex justify-end">
      <p class="pt-6 text-xl font-bold">${formatAmount(data.invoice.total)}</p>
    </div>
    <div class="pt-16 text-sm">
      <p class="font-bold mb-2">PAYMENT ADVICE</p>
      <p class="font-bold">Account name:
        <span class="font-normal">
        ${data.invoice.payment.accountName}
        </span>
      </p>
      <p class="font-bold">Bank name:
        <span class="font-normal">
        ${data.invoice.payment.bankName}
        </span>
      </p>
      <p class="font-bold">IBAN:
        <span class="font-normal">
        ${data.invoice.payment.iban}
        </span>
      </p>
      <p class="font-bold">SWIFT code:
        <span class="font-normal">
        ${data.invoice.payment.swiftCode}
        </span>
      </p>
    </div>
  </div>
`;
};

function formatAmount(amount: number) {
  return Intl.NumberFormat("lt-LT", {
    style: "currency",
    currency: "EUR",
  }).format(amount);
}
