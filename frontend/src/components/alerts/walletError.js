import swal from '@sweetalert/with-react'
import './alert.css'

export default async () => {
  return await swal({
    text: "Please make sure you open and login to Chainweaver",
    title: "No Wallet"
  })
};
