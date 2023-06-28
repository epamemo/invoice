export function formatRupiah(angka, prefix) {
    let number_string = angka.replace(/[^,\d]/g, "").toString(),
        split = number_string.split(","),
        sisa = split[0].length % 3,
        rupiah = split[0].substr(0, sisa),
        ribuan = split[0].substr(sisa).match(/\d{3}/gi);

    if (ribuan) {
        let separator = sisa ? "." : "";
        rupiah += separator + ribuan.join(".");
    }

    rupiah = split[1] !== undefined ? rupiah + "," + split[1] : rupiah;
    return prefix == undefined ? rupiah : rupiah ? "Rp. " + rupiah : "";
}

export function formatPhone(angka, prefix) {
    const numberString = angka.replace(/[^\d]/g, "").slice(0, 20);
    const formattedNumber = numberString.replace(/(\d{4})(?=\d)/g, "$1-");
    return prefix === undefined
        ? formattedNumber
        : `${prefix} ${formattedNumber}`;
}

// export function formatPhone(angka, prefix) {
//     let number_string = angka.replace(/[^\d]/g, "").toString();
//     const maxLength = 13; // Maximum length of the phone number
//     number_string = number_string.substring(0, maxLength); // Truncate if longer than the maximum length

//     let sisa = number_string.length % 4;
//     let rupiah = number_string.substr(0, sisa);
//     let ribuan = number_string.substr(sisa).match(/\d{4}|\d{1,5}$/g); // Modified regex pattern

//     if (ribuan) {
//         let separator = sisa ? "-" : "";
//         rupiah += separator + ribuan.join("-");
//     }

//     return prefix === undefined ? rupiah : prefix + " " + rupiah;
// }
