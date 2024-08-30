"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Check, Loader2, TriangleAlert } from "lucide-react";
import { useState } from "react";

export default function DeleteModal() {
    const [isRequestFullFilled, setIsRequestFullFilled] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    const handleClick = () => {
        setIsRequestFullFilled(true);
        setTimeout(() => {
            setIsRequestFullFilled(false);
            setShowConfirm(true);
        }, 2000);
    };

    return (
        <div className="w-11/12 md:w-1/2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            {showConfirm ? (
                <div className="flex flex-col gap-4 p-4 border rounded items-center">
                    <Check className="text-green-500 w-[100px] h-[100px]" />
                    <p className="text-sm text-center md:text-left">Account deleted successfully, thank you for your cooperation.</p>
                </div>
            ) : (
                <Card>
                    <CardHeader className="items-center">
                        <TriangleAlert className="text-red-500 w-8 h-8"/>
                        <h1 className="text-2xl">Delete Account</h1>
                        <p className="text-sm text-center">
                            Do you want to delete your account?
                        </p>
                    </CardHeader>
                    <CardFooter className="justify-end gap-2 flex-col md:flex-row">
                        <Button variant="ghost" className="md:w-[fit-content] w-full" onClick={() => setShowConfirm(false)}>
                            No , keep it.
                        </Button>
                        <Button onClick={handleClick} variant="destructive"disabled={isRequestFullFilled} className="flex gap-2 md:w-[fit-content] w-full">
                            <span>Yes , Delete!</span>
                            {isRequestFullFilled && <Loader2 className="h-4 w-4 animate-spin" />}
                        </Button>
                    </CardFooter>
                </Card>
            )}
        </div>
    );
}
