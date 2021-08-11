import React from 'react'



export const data = [
    {"id":1, "AddmissionDate": "03/31/2021" ,"DateOfBirth" : "26/03/1989" ,"category":"General" ,"MobileNumber":"769656188" ,"Caste":"null", "Religion":"NULL" ,"Email":"ABC@gmail.com" , "MedicalHistory":"eye infection" , "AdmissionNo" : "180022" , "RollNumber": "34", "Section":"A" ,"image" :"../abc.png"}
]

export const addressData = [
    {"id":1, "currentAddress": "mohali sector 70" ,"permanentAddress" : "3b2 mohali" }
]

export const parentOrGurdianData = [
    {id:2, FatherName: "lorem epsum" ,DateOfBirth : "26/03/1989" ,category:"General" ,MobileNumber :"769656188" ,Caste:"null", Religion:"NULL" ,Email:"ABC@gmail.com" , MedicalHistory:"eye infection" , AdmissionNo: "180022" , RollNumber: "34", Section:"A" ,image :"../abc.png"},
  
]

export const miscellaneousData = [
    {"id":1, "Blood Group ": "mohali" ,"Student House" : "fdfl" ,"Height":"4", " Weight": "55" ,"AsonDAte " : "7696562165", "PreviousSchoolDetail":"lovely", "Guardian Name":"Malesh" , "National Identification":"father" , "Local Identification":"767577575" , "Bank Account number": "doctor" }
]


const StudentDetails = () => {
    return (
        <>
      {/* // new 2 */}
    <div>
    <div className="m-5 p-2 bg-white shadow-lg">
                <h1 className="">Academic Details</h1>
        </div>
        <div className="m-5 p-2 bg-white shadow-lg">
        <table>
                <tbody>
                    {/* <tr>
                    <th>Table Header first column</th>
                    <th>Table Header second column</th>
                    <th>Table Header third column</th>
                    </tr> */}
                {data.map( student => (<div key={student.id}>
                    <>
                        <tr>
                        <td> Addmission Date  : </td>
                        <td>{student.AddmissionDate}</td> 
                        </tr>       
                    <tr>
                        <td>  DateOfBirth  : </td>
                        <td>{student.DateOfBirth}</td>
                    </tr>
                    <tr>
                        <td>  Category  : </td>
                        <td>{student.category}</td>
                    </tr>
                    <tr>
                        <td>  MobileNumber  : </td>
                        <td>{student.MobileNumber}</td>
                    </tr>
                    <tr>
                        <td>  Caste  : </td>
                        <td>{student.Caste}</td>
                    </tr>
                    <tr>
                        <td>  Religon  : </td>
                        <td>{student.Religion}</td>
                    </tr>
                    <tr>
                        <td>  Email  : </td>
                        <td>{student.Email}</td>
                    </tr>
                    <tr>
                        <td>  MedicalHistory  : </td>
                        <td>{student.MedicalHistory}</td>
                    </tr>
                    <tr>
                        <td>  Admission No  : </td>
                        <td>{student.AdmissionNo}</td>
                    </tr>
                    <tr>
                        <td>  Roll No  : </td>
                        <td>{student.RollNumber}</td>
                    </tr>
                    <tr>
                        <td>  Section  : </td>
                        <td>{student.Section}</td>
                    </tr>
                   </>

                 </div>
                ))}
                
               
                </tbody>
                </table>
       
        </div>
    </div>  
   {/* // new 2 */}
    <div>
        <div className="m-5 p-2 bg-white shadow-lg">
                <h1 className="">Address</h1>
        </div>
        <div className="m-5 p-2 bg-white shadow-lg">
        <table>
                <tbody>
                    {/* <tr>
                    <th>Table Header first column</th>
                    <th>Table Header second column</th>
                    <th>Table Header third column</th>
                    </tr> */}
                {addressData.map( student => (<div key={student.id}>
                    <>
                        <tr>
                        <td> Current Address  : </td>
                        <td>{student.currentAddress}</td> 
                        </tr>       
                    <tr>
                        <td>  Permanent Address  : </td>
                        <td>{student.permanentAddress}</td>
                    </tr>
                  
                   </>

                 </div>
                ))}
                
               
                </tbody>
                </table>
       
        </div>
    </div>   
    {/* // new 3 */}

   {/* // new 2 */}
   <div>
        <div className="m-5 p-2 bg-white shadow-lg">
                <h1 className="">Parent / Gurdian Details</h1>
        </div>
        <div className="m-5 p-2 bg-white shadow-lg">
        <table>
                <tbody>
                    {/* <tr>
                    <th>Table Header first column</th>
                    <th>Table Header second column</th>
                    <th>Table Header third column</th>
                    </tr> */}
                {parentOrGurdianData.map(p =>{
                    return(<>
                      <tr>
                        <td> Current Address  : </td>
                        <td>{p.AdmissionNo}</td> 
                        </tr>       
                    <tr>
                        <td>  Permanent Address  : </td>
                        <td>{p.MedicalHistory}</td>
                    </tr>
                  
                    </>
                    )
                })}
                </tbody>
        
        </table>
        </div>
        </div>
       
       
         {/* // new 2 */}
   <div>
        <div className="m-5 p-2 bg-white shadow-lg">
                <h1 className="">Miscellaneous Details</h1>
        </div>
        <div className="m-5 p-2 bg-white shadow-lg">
        <table>
                <tbody>
                    {/* <tr>
                    <th>Table Header first column</th>
                    <th>Table Header second column</th>
                    <th>Table Header third column</th>
                    </tr> */}
                {parentOrGurdianData.map(p =>{
                    return(<>
                      <tr>
                        <td> Current Address  : </td>
                        <td>{p.AdmissionNo}</td> 
                        </tr>       
                    <tr>
                        <td>  Permanent Address  : </td>
                        <td>{p.MedicalHistory}</td>
                    </tr>
                  
                    </>
                    )
                })}
                </tbody>
        
        </table>
        </div>
        </div>
    
        </>
    )
}

export default StudentDetails
