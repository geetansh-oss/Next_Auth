"use client";

import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import Header from "@/components/auth/header";
import Social from "@/components/auth/social";
import BackButton from "@/components/auth/back-button";
export default function CardWrapper({ children, headerLabel, backButtonLabel, backButtonHref, showSocial }) {
  return (
    <Card className="w-[400px] shadow-md">
      <div className="flex flex-col items-center justify-center w-full px-4 py-16 sm:px-6 lg:px-8 sm:py-24 lg:py-32">
        <CardHeader>
          <Header label={headerLabel} />
        </CardHeader>
        <CardContent>
          {children}
        </CardContent>
        {showSocial && (
          <CardFooter>
            <Social />
          </CardFooter>
        )}
        <CardFooter>
          <BackButton
            label={backButtonLabel}
            href={backButtonHref}
          />
        </CardFooter>
      </div>
    </Card>
  );
};