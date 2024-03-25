import '../Styles/display.css'

const DisplayForm = () => {

    const currentUrl = window.location.href;

    const urlParams = currentUrl.split('/display/')[1].split('&');
    const formData:any = {}
    
    urlParams.forEach(param => {
        const [key, value] = param.split('=');
        formData[key] = decodeURIComponent(value.replace(/\+/g, ' '));
      });


    const {name,email,age,dob} = formData
    console.log(formData)


  return (
    <div className="display-main-container">
        <div className="display-container">
            <h2>Form Data</h2>
            <hr />
            <p>Name : {name}</p>
            <p>email : {email}</p>
            <p>age : {age}</p>
            <p>DOB : {dob}</p>
        </div>
    </div>
  )
}

export default DisplayForm