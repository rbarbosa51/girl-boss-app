import {
  Table,
  TableBody,
  TableCell,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
//import { quotes } from "@/data/quotesData";
import { Card } from "@/components/ui/card";
//import { useState, useEffect } from "react";
import type { IQuotes } from "@/data/quotesInterface";
import axios from 'axios'
import { useQuery } from "@tanstack/react-query";

export default function Quotes() {
  //const [quotesData, setQuotesData] = useState<IQuotes[] | null>(null);
  const {data, isLoading, error} = useQuery({
    queryKey: ['quotes'],
    queryFn: async () => {
      const res = await axios.get("/mongo");
      return res.data;
    }
  })
  // useEffect(() => {
  //   setQuotesData([...quotes]);
  //   (async () => {
  //     try {
  //       const result = await axios.get("/mongo");
  //       const data: IQuotes[] = result.data;
  //       setQuotesData(data);
  //     } catch (e) {}
  //   })();
  // }, []);
  return (
    <Card className="p-4 bg-red-200/40 rounded-lg shadow-md">
      <h1 className="text-3xl text-center drop-shadow-md">
        Inspirational Quotes
      </h1>
      <p className="text-center indent-4 mb-2 mx-4">
        Below are inspirational quotes.
      </p>
      <Table>
        <TableCaption>Quotes</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Author</TableHead>
            <TableHead>Quotes</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoading ? 
            (<TableRow className="">
                <TableCell>Loading Data...</TableCell>
              </TableRow>) :
            (data.map((quote: IQuotes, i:number) => (
              <TableRow key={i}>
                <TableCell>{quote.author}</TableCell>
                <TableCell><em>{quote.quote}</em></TableCell>
              </TableRow>
            )))
          
          }
          {/* {quotesData &&
            quotesData.map((quote, i) => (
              <TableRow key={i}>
                <TableCell className="">{quote.author}</TableCell>
                <TableCell className="">
                  <em>{quote.quote}</em>
                </TableCell>
              </TableRow>
            ))} */}
        </TableBody>
      </Table>
    </Card>
  );
}
