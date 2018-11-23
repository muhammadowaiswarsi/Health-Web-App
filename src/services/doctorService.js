export class DoctorService {

   static searchedDoctorList = []

    static searchDoctors = (searchedDoc) => {
       DoctorService.searchDoctorslist = searchedDoc
    }

    static getDoctors = () => {
        return this.searchDoctors
    }
}