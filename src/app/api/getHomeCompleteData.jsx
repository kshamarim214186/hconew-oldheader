export default async function getHomeCompleteData() {
   const formData = new URLSearchParams();
   formData.append('token1', 'test');
   formData.append('token2', 'test1');
   const finalresult = await fetch(process.env.API_URL+'pages/', {
      method: 'POST',
      headers: {
         'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData,
   });  
   return finalresult.json();
}