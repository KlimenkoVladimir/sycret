import axios from "axios";

export default class SycretService {
  static async OSGetGoodList() {
    const response = await axios.get(
      "https://sycret.ru/service/api/api?MethodName=OSGetGoodList&ismob=0&ApiKey=011ba11bdcad4fa396660c2ec447ef14"
    );
    return response.data.data;
  }

  static async OSSale(data, sendData) {
    const queryParams = new URLSearchParams({
      ApiKey: "011ba11bdcad4fa396660c2ec447ef14",
      MethodName: "OSSale",
      Id: parseInt(data.ID),
      TableName: data.TABLENAME,
      PrimaryKey: data.PRIMARYKEY,
      Price: parseFloat(data.PRICE),
      Summa: parseFloat(data.SUMMA),
      ClientName: sendData.CLIENTNAME,
      Phone: sendData.PHONE,
      Email: sendData.EMAIL,
      PaymentTypeId: 2,
      UseDelivery: 0,
      IsGift: 0,
      MsgText: sendData.MSGTEXT,
      PName: "",
      PPhone: "",
    });

    const url = `https://sycret.ru/service/api/api?${queryParams.toString()}`;
    const response = await axios.post(url);
    return response.data.data;
  }
}
